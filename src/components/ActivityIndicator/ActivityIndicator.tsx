import { View, ActivityIndicator as RNActivityIndicator } from "react-native";
import {colors} from '../../theme/colors';
import { styles } from './ActivityIndicator.styles'

export const ActivityIndicator = () => {
  return (
<View style={styles.loadingContainer}>
          <RNActivityIndicator size="large" color={colors.brand.teal} />
        </View>
  )};
