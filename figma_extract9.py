import json, re
filepath = 'C:/Users/Intel/.claude/projects/c--Users-Intel-Desktop-naxatra/b576d8b9-b0e7-4cc1-9016-58ece35abed3/tool-results/mcp-figma-get_design_context-1776886492837.txt'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f'Items: {len(data)}')
for i, item in enumerate(data):
    print(f'[{i}] type={item.get("type")}, len={len(item.get("text",""))}')

# Print each item
for i, item in enumerate(data):
    text = item.get('text','')
    print(f'\n=== ITEM {i} (first 3000 chars) ===')
    print(text[:3000])
