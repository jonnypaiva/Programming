import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, Users, Calendar, BookOpen, MessageSquare } from 'lucide-react-native';

export default function GroupDetailsScreen() {
  const { id } = useLocalSearchParams();

  // Mock data - replace with actual data fetching
  const group = {
    id: '1',
    name: 'Clube de Literatura Moderna',
    members: [
      { id: '1', name: 'Ana Silva', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop' },
      { id: '2', name: 'João Santos', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop' },
    ],
    currentBook: {
      title: 'O Mito de Sísifo',
      author: 'Albert Camus',
      progress: 65,
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop',
    },
    nextMeeting: {
      date: 'Hoje, 19:00',
      type: 'Online',
      topic: 'Discussão dos capítulos 1-3',
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.title}>{group.name}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leitura Atual</Text>
        <View style={styles.bookCard}>
          <Image source={{ uri: group.currentBook.cover }} style={styles.bookCover} />
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{group.currentBook.title}</Text>
            <Text style={styles.bookAuthor}>{group.currentBook.author}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${group.currentBook.progress}%` }]} />
            </View>
            <Text style={styles.progressText}>{group.currentBook.progress}% concluído</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Próxima Reunião</Text>
        <View style={styles.meetingCard}>
          <View style={styles.meetingHeader}>
            <Calendar size={20} color="#8B4513" />
            <Text style={styles.meetingDate}>{group.nextMeeting.date}</Text>
          </View>
          <Text style={styles.meetingTopic}>{group.nextMeeting.topic}</Text>
          <Text style={styles.meetingType}>{group.nextMeeting.type}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Membros</Text>
          <TouchableOpacity onPress={() => router.push('/groups/members')}>
            <Text style={styles.seeAllButton}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.membersScroll}>
          {group.members.map(member => (
            <View key={member.id} style={styles.memberCard}>
              <Image source={{ uri: member.avatar }} style={styles.memberAvatar} />
              <Text style={styles.memberName}>{member.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/groups/discussion')}>
          <MessageSquare size={24} color="#FFFFFF" />
          <Text style={styles.actionButtonText}>Discussão</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    flex: 1,
  },
  section: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
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
    marginBottom: 16,
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
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
    marginBottom: 16,
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
  progressText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666666',
  },
  meetingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  meetingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  meetingDate: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1A1A1A',
    marginLeft: 8,
  },
  meetingTopic: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  meetingType: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#8B4513',
  },
  membersScroll: {
    flexDirection: 'row',
  },
  memberCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  memberAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  memberName: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#1A1A1A',
    textAlign: 'center',
  },
  seeAllButton: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#8B4513',
  },
  actions: {
    padding: 16,
  },
  actionButton: {
    backgroundColor: '#8B4513',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  actionButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});