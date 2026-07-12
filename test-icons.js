const si = require('react-icons/si');
const keys = ['SiDotnet', 'SiReact', 'SiDocker', 'SiKubernetes', 'SiPostgresql', 'SiPython', 'SiCplusplus', 'SiHtml5', 'SiJavascript', 'SiGithub', 'SiJsonwebtokens'];
console.log(keys.map(k => `${k}: ${!!si[k]}`).join('\n'));
