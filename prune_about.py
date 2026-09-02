import re

with open('src/components/AboutSection.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove ABOUT HERO (Lines 125-166)
# Match from {/* ================================================ \n            1. ABOUT HERO to just before 2. OUR STORY
content = re.sub(r'\{\/\*\s*================================================\s*1\. ABOUT HERO.*?(?=\{\/\*\s*================================================\s*2\. OUR STORY)', '', content, flags=re.DOTALL)

# 2. Remove Image from OUR STORY (Lines 216-228)
content = re.sub(r'\{\/\*\s*Image\s*\*\/\}\s*<div className="about-story__visual">.*?<\/div>\s*<\/div>', '</div>', content, flags=re.DOTALL)

# 3. Remove PRODUCT RANGE (Lines 274-363)
content = re.sub(r'\{\/\*\s*================================================\s*4\. PRODUCT RANGE.*?(?=\{\/\*\s*================================================\s*5\. PRODUCT JOURNEY)', '', content, flags=re.DOTALL)

# 4. Remove CTA (Lines 494-530)
content = re.sub(r'\{\/\*\s*================================================\s*8\. CTA.*?(?=\s*<\/section>\s*<\/section>\s*\))', '', content, flags=re.DOTALL)

with open('src/components/AboutSection.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
