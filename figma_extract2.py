import json, re
filepath = 'C:/Users/Intel/.claude/projects/c--Users-Intel-Desktop-naxatra/b576d8b9-b0e7-4cc1-9016-58ece35abed3/tool-results/mcp-figma-get_design_context-1776886121581.txt'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
text = data[0]['text']

# Find where the metadata/asset section starts (after the XML structure)
# Look for JSON-like structures or asset URLs
for keyword in ['assets', 'uuid', 'UUID', 'download', 'http', 'font', 'background', 'style', 'css']:
    idx = text.find(keyword)
    if idx != -1:
        print(f'"{keyword}" found at: {idx}')
        print(f'  Context: {text[max(0,idx-50):idx+100]}')
        print()

# Print last 5000 chars where metadata usually is
print('=== LAST 5000 CHARS ===')
print(text[-5000:])
