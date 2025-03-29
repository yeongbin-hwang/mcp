'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl">
          MCP (My Coding Partner)
        </Heading>
        <Text fontSize="xl">
          당신의 코딩 파트너가 되어드립니다. AI와 함께 더 나은 코드를 작성해보세요.
        </Text>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            주요 기능
          </Text>
          <VStack align="start" spacing={2}>
            <Text>✨ AI 기반 코드 리뷰</Text>
            <Text>🚀 자동 코드 개선 제안</Text>
            <Text>📝 문서화 자동화</Text>
            <Text>🔍 버그 탐지 및 수정</Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}