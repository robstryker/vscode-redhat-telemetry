import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import 'mocha';
import path from 'path';
import * as os from 'os';
import * as fs from 'fs';

const expect = chai.expect;
chai.use(sinonChai);
suite('Test First Test', () => {
    setup(() => {  
      });
      teardown(() => {
      });
      test('This is a simple test', async () => {
        let tmpDir: string | undefined = undefined;
        try {
          tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "someName"));
          console.log("Tmpdir made: " + tmpDir);
        } catch( err ) {
          console.log("error");
        }
      });
  });
