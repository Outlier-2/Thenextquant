import next_intl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
};

const withNextIntl = next_intl("./src/i18n.js");1

export default withNextIntl(nextConfig);

