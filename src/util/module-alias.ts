import * as path from 'path';
import moduleAlias from 'module-alias';

const Files = path.resolve(__dirname, "../..");

moduleAlias.addAliases({
    '@src': path.join(Files, 'src'),
    '@test': path.join(Files, 'test')
})