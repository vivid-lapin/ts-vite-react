import { Container, MantineProvider, Text, Title } from "@mantine/core"
import React from "react"

export const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <Container>
        <Title order={1}>App</Title>
        <Text>This is App</Text>
      </Container>
    </MantineProvider>
  )
}
