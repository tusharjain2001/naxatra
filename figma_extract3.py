import json, re
filepath = 'C:/Users/Intel/.claude/projects/c--Users-Intel-Desktop-naxatra/b576d8b9-b0e7-4cc1-9016-58ece35abed3/tool-results/mcp-figma-get_design_context-1776886121581.txt'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
text = data[0]['text']

# Print sections around each major section
# Find key positions
sections = [
    ('2112:19', 'Hero Section (Frame 1000005568)'),
    ('2219:731', 'Jobs Section'),
    ('2219:855', 'Contact Form Section'),
    ('2350:1826', 'Footer'),
    ('2199:1068', 'Navigation'),
]

for node_id, desc in sections:
    idx = text.find(f'id="{node_id}"')
    if idx != -1:
        print(f'=== {desc} ({node_id}) at pos {idx} ===')
        print(text[idx:idx+800])
        print()

# Now look for style/CSS information after the XML
print('=== SEARCHING FOR STYLE SECTIONS ===')
# Look for any JSON objects with asset info
for pattern in ['"url"', '"src"', '"image"', '"asset"', '"fill"', '"font"']:
    idx = text.find(pattern)
    if idx != -1:
        print(f'Pattern {pattern} at {idx}: {text[max(0,idx-30):idx+200]}')
        print()
