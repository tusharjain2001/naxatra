import json, re
filepath = 'C:/Users/Intel/.claude/projects/c--Users-Intel-Desktop-naxatra/b576d8b9-b0e7-4cc1-9016-58ece35abed3/tool-results/mcp-figma-get_design_context-1776886121581.txt'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
text = data[0]['text']

# Find the photo section in the contact form (right side image)
photo_idx = text.find('id="2219:901"')
print('=== RECTANGLE/PHOTO PLACEHOLDER ===')
print(text[photo_idx:photo_idx+500])
print()

# Find all rounded-rectangles (form fields and buttons)
rr_nodes = re.findall(r'<rounded-rectangle id="([^"]+)" name="([^"]+)"[^/]*/>', text)
print('=== ALL ROUNDED RECTANGLES ===')
for rid, rname in rr_nodes:
    print(f'  [{rid}] {rname}')
print()

# Look at remaining jobs section (Design and Dev Engineer, Mechanical, Testing)
remaining_jobs = text[text.find('id="2219:954"'):text.find('id="2219:855"')]
print('=== REMAINING JOB CARDS ===')
print(remaining_jobs[:5000])
