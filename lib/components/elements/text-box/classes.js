import jss from '../../../react-jss';

const common = {
  fontSize: 'inherit',
  lineHeight: 'inherit',
  letterSpacing: 'inherit',
  fontFamily: 'inherit',
  fontStyle: 'inherit',
  fontWeight: 'inherit',
  margin: 0,
  padding: 0,
  color: 'inherit'
};

export default jss.createRules({
  text: {
    outline: 0,
    border: 0,
    p: common,
    h1: common,
    h2: common,
    h3: common,
    h4: common,
    h5: common,
    h6: common
  }
});
