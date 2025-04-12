import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { BookOpen, Clock, ChartBar as BarChart2 } from 'lucide-react-native';

export default function MyBooksScreen() {
  const books = [
    {
      id: '1',
      title: 'O Mito de Sísifo',
      author: 'Albert Camus',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop',
      progress: 65,
      group: 'Clube de Literatura Moderna',
      lastRead: 'Hoje, 14:30',
      pagesRead: 127,
      totalPages: 350,
    },
    {
      id: '2',
      title: 'Fundação',
      author: 'Isaac Asimov',
      cover: 'https://images.unsplash.com/photo-1531072901881-d644216d4bf9?w=400&auto=format&fit=crop',
      progress: 30,
      group: 'Leitores de Ficção Científica',
      lastRead: 'Ontem, 20:15',
      pagesRead: 89,
      totalPages: 255,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Leituras</Text>
      </View>

      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>Resumo da Semana</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <BookOpen size={24} color="#8B4513" />
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Livros ativos</Text>
          </View>
          <View style={styles.statItem}>
            <Clock size={24} color="#8B4513" />
            <Text style={styles.statNumber}>12.5h</Text>
            <Text style={styles.statLabel}>Tempo de leitura</Text>
          </View>
          <View style={styles.statItem}>
            <BarChart2 size={24} color="#8B4513" />
            <Text style={styles.statNumber}>324</Text>
            <Text style={styles.statLabel}>Páginas lidas</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.booksList}>
        {books.map(book => (
          <TouchableOpacity
            key={book.id}
            style={styles.bookCard}
            onPress={() => router.push(`/my-books/${book.id}`)}
          >
            <Image source={{ uri: book.cover }} style={styles.bookCover} />
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookAuthor}>{book.author}</Text>
              <Text style={styles.groupName}>{book.group}</Text>
              
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${book.progress}%` }]} />
                </View>
                <View style={styles.progressStats}>
                  <Text style={styles.progressText}>{book.progress}% concluído</Text>
                  <Text style={styles.pagesText}>
                    {book.pagesRead} de {book.totalPages} páginas
                  </Text>
                </View>
              </View>

              <Text style={styles.lastRead}>
                Última leitura: {book.lastRead}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 32,
    color: '#1A1A1A',
  },
  statsCard: {
    margin: 16,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statsTitle: {
    fontFamily: 'PlayfairDisplay-Regular',
    fontSize: 20,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#1A1A1A',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666666',
  },
  booksList: {
    padding: 16,
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bookCover: {
    width: 100,
    height: 150,
  },
  bookInfo: {
    flex: 1,
    padding: 16,
  },
  bookTitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  bookAuthor: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  groupName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#8B4513',
    marginBottom: 12,
  },
  progressContainer: {
    marginBottom: 12,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E5E5',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#8B4513',
    borderRadius: 2,
  },
  progressStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1A1A1A',
  },
  pagesText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666666',
  },
  lastRead: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666666',
    marginTop: 8,
  },
});