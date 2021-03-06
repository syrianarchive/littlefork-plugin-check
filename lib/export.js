import {size} from 'lodash/fp';
import {updateCheck} from './api';

const plugin = (envelope, {cfg, log}) => {
  log.info(`Calling a plugin with ${size(envelope.data)} units.`);

  const token = cfg.check.token;
  const pid = cfg.check.project_id;
  const apiurl = cfg.check.api_url;

  return updateCheck(token, apiurl, pid, envelope.data).then(() => envelope);
};

plugin.desc = 'A plugin boilerplate module.';

plugin.argv = {
  'check.token': {
    type: 'text',
    desc: 'check token'
  },
};

export default plugin;
