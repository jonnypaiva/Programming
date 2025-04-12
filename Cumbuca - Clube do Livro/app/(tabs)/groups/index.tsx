import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Plus, Users, Calendar, BookOpen } from 'lucide-react-native';
import { router } from 'expo-router';

export default function GroupsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const groups = [
    {
      id: '1',
      name: 'Clube de Literatura Moderna',
      members: 8,
      currentBook: 'O Mito de Sísifo',
      nextMeeting: 'Hoje, 19:00',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop'
    },
    {
      id: '2',
      name: 'Leitores de Ficção Científica',
      members: 12,
      currentBook: 'Fundação',
      nextMeeting: 'Quinta, 20:00',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Seus Grupos</Text>
        <TouchableOpacity 
          style={styles.createButton}
          onPress={() => router.push('/groups/create')}
        >
          <Plus size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar grupos..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <ScrollView style={styles.groupsList}>
        {groups.map(group => (
          <TouchableOpacity
            key={group.id}
            style={styles.groupCard}
            onPress={() => router.push(`/groups/${group.id}`)}
          >
            <View style={styles.groupHeader}>
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>{group.name}</Text>
                <View style={styles.groupStats}>
                  <View style={styles.statItem}>
                    <Users size={16} color="#666666" />
                    <Text style={styles.statText}>{group.members} membros</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Calendar size={16} color="#666666" />
                    <Text style={styles.statText}>{group.nextMeeting}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.currentBook}>
              <BookOpen size={16} color="#8B4513" />
              <Text style={styles.currentBookText}>
                Lendo: <Text style={styles.bookTitle}>{group.currentBook}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 32,
    color: '#1A1A1A',
  },
  createButton: {
    backgroundColor: '#8B4513',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    margin: 16,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1A1A1A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  groupsList: {
    padding: 16,
  },
  groupCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  groupHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 20,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  groupStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
  },
  currentBook: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  currentBookText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
  },
  bookTitle: {
    fontFamily: 'Inter-SemiBold',
    color: '#1A1A1A',
  },
});