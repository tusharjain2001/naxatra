import json, re
filepath = 'C:/Users/Intel/.claude/projects/c--Users-Intel-Desktop-naxatra/b576d8b9-b0e7-4cc1-9016-58ece35abed3/tool-results/mcp-figma-get_design_context-1776886121581.txt'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
text = data[0]['text']
print(f'Total length: {len(text)}')

# Search for fill
fill_idx = text.find('fill=')
print(f'fill= at: {fill_idx}')
if fill_idx != -1:
    print(text[fill_idx:fill_idx+300])

# Search rgba
rgba_idx = text.find('rgba(')
print(f'rgba at: {rgba_idx}')
if rgba_idx != -1:
    print(text[rgba_idx:rgba_idx+200])

# Search for color
color_idx = text.find('color')
print(f'color at: {color_idx}')
if color_idx != -1:
    print(text[color_idx:color_idx+200])

# Print chunk from position 10000
print('=== CHUNK at 10000 ===')
print(text[10000:12000])
