import { Container, MantineProvider, Text, Title, Switch } from "@mantine/core"
import React from "react"
// eslint-disable-next-line import/no-unresolved
import "@mantine/core/styles.css"

export const App = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Container>
        <Title order={1}>App</Title>
        <Text>This is App</Text>
        <Switch></Switch>
      </Container>
    </MantineProvider>
  )
}
