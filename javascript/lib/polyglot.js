const line = (string) => process.stdout.write(string)
const ruby = (string) => console.log('\'' + string + '\'')

const languages = {
  'python': {
    'print': console.log,
  },
  'actionscript': {
    'trace': console.log
  },
  'amigae': {
    'WriteF': console.log
  },
  'asp': {
    'Response': {
      'Write': console.log
    }
  },
  'b': {
    'putschar': console.log
  },
  'c': {
    'printf': line,
    'puts': console.log
  },
  'c#': {
    'Console': {
      'println': console.log,
      'WriteLine': console.log
    }
  },
  'clipper': {
    'Qout': console.log
  },
  'd': {
    'writeln': console.log,
    'std': {
      'stdio': {
        'writeln': console.log
      }
    }
  },
  'dart': {
    'print': console.log
  },
  'delphi': {
    'Writeln': console.log
  },
  'elixir': {
    'IO': {
      'write': line,
      'puts': console.log
    }
  },
  'go': {
    'fmt': {
      'Println': console.log,
      'Printf': line
    }
  },
  'haskell': {
    'putStr': line,
    'putStrLn': console.log
  },
  'java': {
    'System': {
      'out': {
        'println': console.log
      }
    }
  },
  'kotlin': {
    'println': console.log
  },
  'lua': {
    'io': {
      'write': line
    }
  },
  'matlab': {
    'fprintf': line,
    'disp': console.log
  },
  'nim': {
    'echo': console.log
  },
  'objetive-c': {
    'NSLog': console.log
  },
  'pascal': {
    'Write': line,
    'WriteLn': console.log
  },
  'pike': {
    'write': line,
    'writeln': console.log
  },
  'processing': {
    'print': line,
    'println': console.log
  },
  'purebasic': {
    'PrintN': console.log
  },
  'ruby': {
    'p': ruby
  },
  'unity3d': {
    'Debug': {
      'Log': console.log
    }
  }
}

for (let language in languages) {
  for (let command in languages[language]) {
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