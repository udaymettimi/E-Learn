import { Box, useStyleConfig } from "@chakra-ui/react";
function Card(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("Card", { variant });

  return (
    <Box __css={styles} p={6} borderRadius="lg" boxShadow="md" bg="white" {...rest}>
      {children}
    </Box>
  );
}

export default Card;
