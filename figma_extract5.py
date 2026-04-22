import json, re
filepath = 'C:/Users/Intel/.claude/projects/c--Users-Intel-Desktop-naxatra/b576d8b9-b0e7-4cc1-9016-58ece35abed3/tool-results/mcp-figma-get_design_context-1776886121581.txt'
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
text = data[0]['text']

# Print the search bar section in detail
search_start = text.find('id="2219:737"')
print('=== SEARCH BAR SECTION ===')
print(text[search_start:search_start+2000])
print()

# Print filter dropdowns
filter_start = text.find('id="2219:744"')
print('=== FILTER DROPDOWNS ===')
print(text[filter_start:filter_start+1000])
print()

# Get the contact form in full
form_start = text.find('id="2219:855"')
print('=== CONTACT FORM ===')
print(text[form_start:form_start+3000])
print()

# Check what instances are used (buttons etc)
instances = re.findall(r'<instance id="([^"]+)" name="([^"]+)"[^/]*/>', text)
print('=== ALL INSTANCES (self-closing) ===')
for iid, iname in instances:
    print(f'  [{iid}] {iname}')
