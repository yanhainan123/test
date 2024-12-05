export const messageSuccess = (content: string, options: any = {}) => {
  (window as any).$message.success(content, {
    ...options,
  });
};

