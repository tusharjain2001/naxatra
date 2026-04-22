import json, re
filepath = 'C:/Users/Intel/.claude/projects/c--Users-Intel-Desktop-naxatra/b576d8b9-b0e7-4cc1-9016-58ece35abed3/tool-results/mcp-figma-get_design_context-1776886121581.txt'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
text = data[0]['text']

# Look for any attributes in image/asset nodes (UUIDs, URLs)
# Find all image-named nodes
img_nodes = re.findall(r'<[^>]+name="image[^"]*"[^>]*/>', text)
print('=== IMAGE NODES ===')
for n in img_nodes:
    print(f'  {n}')
print()

# Look for all vector nodes with UUIDs or src attributes
attr_nodes = re.findall(r'<[^>]+(?:src|uuid|asset|url|href)=[^>]*/>', text, re.IGNORECASE)
print('=== NODES WITH SRC/UUID/ASSET ATTRS ===')
for n in attr_nodes:
    print(f'  {n}')
print()

# Check the overall structure - print from the contact form section image placeholder
contact_area = text[text.find('id="2219:855"'):text.find('id="2350:1826"')]
print('=== FULL CONTACT AREA ===')
print(contact_area)
