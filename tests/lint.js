// Static check of the app's JavaScript: undefined names, duplicate keys, unreachable or unused code.
// Run: node tests/lint.js   (needs: npm i -D eslint@8)
const fs=require('fs'), path=require('path');
let ESLint; try{ ({ESLint}=require('eslint')) }catch(e){ console.error('ESLint is missing: npm i -D eslint@8'); process.exit(2) }
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const code=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n');
const eslint=new ESLint({useEslintrc:false,baseConfig:{env:{browser:true,es2022:true},parserOptions:{ecmaVersion:2022,sourceType:'script'},
  globals:{STANDALONE:'readonly',NO_TIPS:'readonly',KP_SAMPLE:'readonly',google:'readonly',claude:'readonly',Tesseract:'readonly'},
  rules:{'no-undef':'error','no-dupe-keys':'error','no-redeclare':'error','no-self-assign':'error','no-dupe-else-if':'error','no-duplicate-case':'error','use-isnan':'error','valid-typeof':'error','no-unreachable':'warn','no-unused-vars':['warn',{vars:'all',args:'none'}],'no-constant-condition':['warn',{checkLoops:false}]}}});
(async()=>{ const [r]=await eslint.lintText(code,{filePath:'app.js'}); r.messages.forEach(m=>console.log(`${m.severity===2?'error':'warn '} line ${m.line}: ${m.message}`));
  console.log(`${r.errorCount} errors, ${r.warningCount} warnings`); process.exit(r.errorCount?1:0) })();
