const line = (string) => process.stdout.write(string)

const languages = {
  'python': {
    'print': console.log,
  },
  'java': {
    'System.out.println': console.log
  },
  'go': {
    'fmt': {
      'println': console.log,
      'printf': line
    }
  },
  'processing': {
    // 'print': line,
    'println': console.log
  }
}

for (let language in languages) {
  for (let command in languages[language]) {
    // console.log(command, languages[language][command], typeof languages[language][command])
    let b = global
    let r = command.split('.')
    for (let c = 0; c < r.length; c++) {
      if (b[r[c]] === undefined) {
        if (c === r.length - 1) b[r[c]] = languages[language][command]
        else {
          b[r[c]] = function () { }
          b = b[r[c]]
        }
      }
    }
  }
}