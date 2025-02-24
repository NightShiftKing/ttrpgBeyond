import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="CyberPunkRed" options={{ headerShown: false }} />
      <Stack.Screen name="D&D" options={{ headerShown: false }} />
      <Stack.Screen name="PathFinder2e" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
