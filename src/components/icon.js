import PencilIcon from "./icons/pencil-icon";
import PlusIcon from "./icons/plus-icon";
import TrashIcon from "./icons/trash-icon";

/**
 * @typedef IconProps
 * @property {string} name
 * @property {number} width
 * @property {number} height
 * @property {string} color
 * @param {IconProps}
 */

const Icon = ({ name = "plus", width = 24, height = 24, color = "white" }) => {
  return iconName[name]({ width, height, color });
};

export default Icon;

const iconName = {
  plus: ({ ...props }) => <PlusIcon {...props} />,
  trash: ({ ...props }) => <TrashIcon {...props} />,
  pencil: ({ ...props }) => <PencilIcon {...props} />,
};
