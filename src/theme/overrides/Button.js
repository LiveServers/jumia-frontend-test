export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[900],
          boxShadow: theme.customShadows.main,
          backgroundColor: theme.palette.secondary.white,
          "&:hover": {
            backgroundColor: theme.palette.secondary.secondaryGrey,
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.main,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.main,
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
