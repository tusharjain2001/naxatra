import json, re
filepath = 'C:/Users/Intel/.claude/projects/c--Users-Intel-Desktop-naxatra/b576d8b9-b0e7-4cc1-9016-58ece35abed3/tool-results/mcp-figma-get_design_context-1776886121581.txt'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
text = data[0]['text']

# Check for all icons used (boxicons, mingcute, material-symbols etc.)
icon_frames = re.findall(r'<frame id="([^"]+)" name="((?:boxicons|mingcute|material-symbols|ion|tabler|lucide|heroicons|mdi|ph|ri|bi|fa|material)[^"]+)"[^>]*/>', text)
print('=== ALL ICON NODES ===')
for iid, iname in icon_frames:
    print(f'  [{iid}] {iname}')
print()

# Count unique icon types
icon_names = set(iname for _, iname in icon_frames)
print('=== UNIQUE ICONS ===')
for n in sorted(icon_names):
    print(f'  {n}')
print()

# Check for Download Job Description buttons
btn_instances = [item for item in re.findall(r'<instance id="([^"]+)" name="([^"]+)"[^/]*/>', text)]
print('=== BUTTON INSTANCES ===')
for bid, bname in btn_instances:
    print(f'  [{bid}] {bname}')
print()

# Print the hero background info
hero_section = text[text.find('id="2112:19"'):text.find('id="2219:731"')]
print('=== HERO FULL STRUCTURE ===')
print(hero_section[:10000])
