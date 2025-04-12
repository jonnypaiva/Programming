import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ChartLine as LineChart } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Leitor!</Text>
        <Text style={styles.date}>Segunda-feira, 12 de Fevereiro</Text>
      </View>

      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>Seu progresso semanal</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>127</Text>
            <Text style={styles.statLabel}>Páginas lidas</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Livros ativos</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Grupos</Text>
          </View>
        </View>
        <View style={styles.chart}>
          <LineChart size={24} color="#8B4513" />
          {/* TODO: Implement actual chart */}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Próximas reuniões</Text>
        <View style={styles.meetingCard}>
          <Text style={styles.meetingTitle}>Clube de Literatura Moderna</Text>
          <Text style={styles.meetingDate}>Hoje, 19:00</Text>
          <Text style={styles.meetingType}>Reunião Online</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leituras em andamento</Text>
        {/* TODO: Add current reading list */}
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
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  greeting: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  date: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
  },
  statsCard: {
    margin: 16,
    padding: 16,
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
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#8B4513',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666666',
  },
  chart: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'PlayfairDisplay-Regular',
    fontSize: 20,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  meetingCard: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
  },
  meetingTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  meetingDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  meetingType: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#8B4513',
  },
});