import json, re
filepath = 'C:/Users/Intel/.claude/projects/c--Users-Intel-Desktop-naxatra/b576d8b9-b0e7-4cc1-9016-58ece35abed3/tool-results/mcp-figma-get_design_context-1776886121581.txt'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
text = data[0]['text']

# Print the full Jobs section to get all job cards
jobs_start = text.find('id="2219:731"')
jobs_end = text.find('id="2219:855"')
jobs_section = text[jobs_start:jobs_end]
print('=== FULL JOBS SECTION ===')
print(jobs_section[:8000])
