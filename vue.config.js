module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/wp-content/themes/glow-theme/email-signature-builder/"
      : "/",
};
