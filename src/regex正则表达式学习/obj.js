let a = 20;
const b = 30;
var c;

function multiply(e, f) {
 var g = 20;
 return e * f * g;
}

c = multiply(20, 30);
GlobalExectionContext = {
  ThisBinding: <Global Object>
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: 'Object',
      a: <uninitialized>,
      b: <uninitialized>,
      multuply: <func>
    }
    outer: <null>,
  },
  VariableEnvironment: {
    EnvironmenRecord: {
      Type: 'Object',
      c: <undefined>,
    },
    outer: null,
  }
}
FunctionExectionContext = {
  ThisBinding: <Global>,
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: 'Declaraive',
      Arguments: {0: 20, 1: 30, length: 2}
    },
    outer: <GlobalExectionContext>
  }
  VariableEnvironment: {
    EnvironmentRecord: {
      type: 'Declarative',
      g: <undefined>
    },
    outer: <GlobalExectionContext>
  },
}
