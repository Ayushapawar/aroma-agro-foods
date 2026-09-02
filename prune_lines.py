def prune_file():
    with open('src/components/AboutSection.jsx', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    for i, line in enumerate(lines, 1):
        if 125 <= i <= 166:
            continue
        if 216 <= i <= 228:
            continue
        if 274 <= i <= 363:
            continue
        if 494 <= i <= 530:
            continue
        new_lines.append(line)
        
    with open('src/components/AboutSection.jsx', 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

if __name__ == '__main__':
    prune_file()
