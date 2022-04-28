var isValid = function(s) {
    const stack = [];
    for (const c of s) {
      if (c === '{' || c === '[' || c === '(') stack.push(c);
      else {
        const p = stack.pop(); // No need to check for empty before popping (returns undefined)
        if ((c === '}' && p !== '{') || (c === ']' && p !== '[') || (c === ')') & (p !== '(')) return false;
      }
    }
    return stack.length === 0;
  };