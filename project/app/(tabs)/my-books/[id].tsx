import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, BookOpen, Clock, Calendar, MessageSquare, Share2 } from 'lucide-react-native';

export default function BookProgressScreen() {
  const { id } = useLocalSearchParams();

  // Mock data - replace with actual data fetching
  const book = {
    id: '1',
    title: 'O Mito de Sísifo',
    author: 'Albert Camus',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop',
    progress: 65,
    group: 'Clube de Literatura Moderna',
    currentPage: 127,
    totalPages: 350,
    timeSpent: '12h 30min',
    nextMeeting: 'Quinta, 19:00',
    readingHistory: [
      { date: '12/02', pages: 15, time: '45min' },
      { date: '11/02', pages: 20, time: '1h' },
      { date: '10/02', pages: 12, time: '30min' },
    ],
    annotations: [
      {
        page: 45,
        text: 'O absurdo nasce desse confronto entre o apelo humano e o silêncio irracional do mundo.',
        date: '10/02/2024',
      },
      {
        page: 67,
        text: 'A luta em si para atingir os píncaros basta para encher o coração de um homem.',
        date: '11/02/2024',
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Share2 size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      <View style={styles.bookHeader}>
        <Image source={{ uri: book.cover }} style={styles.bookCover} />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookAuthor}>{book.author}</Text>
          <Text style={styles.groupName}>{book.group}</Text>
        </View>
      </View>

      <View style={styles.progressSection}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${book.progress}%` }]} />
        </View>
        <View style={styles.progressStats}>
          <View style={styles.statItem}>
            <BookOpen size={20} color="#8B4513" />
            <Text style={styles.statNumber}>{book.currentPage}</Text>
            <Text style={styles.statLabel}>de {book.totalPages} páginas</Text>
          </View>
          <View style={styles.statItem}>
            <Clock size={20} color="#8B4513" />
            <Text style={styles.statNumber}>{book.timeSpent}</Text>
            <Text style={styles.statLabel}>Tempo total</Text>
          </View>
          <View style={styles.statItem}>
            <Calendar size={20} color="#8B4513" />
            <Text style={styles.statNumber}>{book.nextMeeting}</Text>
            <Text style={styles.statLabel}>Próxima reunião</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Histórico de Leitura</Text>
        {book.readingHistory.map((entry, index) => (
          <View key={index} style={styles.historyEntry}>
            <Text style={styles.historyDate}>{entry.date}</Text>
            <Text style={styles.historyPages}>{entry.pages} páginas</Text>
            <Text style={styles.historyTime}>{entry.time}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Anotações</Text>
          <TouchableOpacity style={styles.addButton}>
            <MessageSquare size={20} color="#8B4513" />
            <Text style={styles.addButtonText}>Nova anotação</Text>
          </TouchableOpacity>
        </View>
        {book.annotations.map((annotation, index) => (
          <View key={index} style={styles.annotationCard}>
            <View style={styles.annotationHeader}>
              <Text style={styles.annotationPage}>Página {annotation.page}</Text>
              <Text style={styles.annotationDate}>{annotation.date}</Text>
            </View>
            <Text style={styles.annotationText}>{annotation.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookHeader: {
    padding: 24,
    alignItems: 'center',
  },
  bookCover: {
    width: 150,
    height: 225,
    borderRadius: 12,
    marginBottom: 16,
  },
  bookInfo: {
    alignItems: 'center',
  },
  bookTitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 8,
  },
  bookAuthor: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,
  },
  groupName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#8B4513',
  },
  progressSection: {
    padding: 24,
    backgroundColor: '#F5F5F5',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    marginBottom: 24,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#8B4513',
    borderRadius: 4,
  },
  progressStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1A1A1A',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666666',
  },
  section: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'PlayfairDisplay-Regular',
    fontSize: 20,
    color: '#1A1A1A',
  },
  historyEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  historyDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
  },
  historyPages: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1A1A1A',
  },
  historyTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#8B4513',
  },
  annotationCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  annotationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  annotationPage: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1A1A1A',
  },
  annotationDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666666',
  },
  annotationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#1A1A1A',
    lineHeight: 20,
  },
});