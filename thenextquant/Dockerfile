# 使用官方的Node.js运行时作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app/thenextquant

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装项目依赖
RUN npm install pnpm
RUN pnpm install 

# 复制项目文件
COPY . .

# 构建Next.js应用
RUN pnpm next build

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["pnpm", "start"]
