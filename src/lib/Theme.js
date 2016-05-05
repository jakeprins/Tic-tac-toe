import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Singmar One, sans-serif',
  palette: {
    primary1Color: Colors.deepPurple500,
    primary2Color: Colors.deepPurple700,
    primary3Color: Colors.deepPurple800,
    accent1Color: Colors.greenA200,
    accent2Color: Colors.greenA400,
    accent3Color: Colors.greenA200,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.deepPurple500,
  }
};
