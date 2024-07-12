#!/bin/bash
# 获取用户输入的测试目录和脚本文件名
read -p "请输入测试目录: " test_dir
# read -p "请输入脚本文件名: " script_name

# 运行 unittest 发现和执行测试
python -m unittest discover -s "$test_dir" -p "*.py"
