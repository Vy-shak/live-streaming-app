import type { Config } from "tailwindcss"
import sharedConfig from "@repo/typescript-config/base.json"

const config: Pick<Config, "content" | "presets"> = {
    content: ["./app/**/*.tsx"],
    presets: [sharedConfig],
}

export default config