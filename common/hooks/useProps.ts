export function useProps<T extends {}>(componentName: string, userProps: T): T {
  return userProps;
}
