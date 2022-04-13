import Large from './large'
import Small from './small'
import Medium from './medium'
import Mini from './mini'

export default (props) => {
  switch (props.size) {
    case "large":
      return <Large {...props} />;
    case "medium":
      return <Medium {...props} />;
    case "small":
      return <Small {...props} />;
    case "mini":
      return <Mini {...props} />;
  }
};