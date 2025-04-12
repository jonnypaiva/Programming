import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, ShoppingBag, Share2 } from 'lucide-react-native';

export default function BookDetailsScreen() {
  const { id } = useLocalSearchParams();

  // Mock data - replace with actual data fetching
  const book = {
    id: '1',
    title: 'O Mito de Sísifo',
    author: 'Albert Camus',
    price: 49.90,
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop',
    description: 'Um ensaio filosófico sobre o absurdo da existência humana. Nesta obra fundamental, Camus explora a tensão entre a busca humana por significado e a aparente falta de sentido do universo.',
    details: {
      publisher: 'Editora Record',
      year: 2018,
      pages: 350,
      language: 'Português',
      isbn: '978-85-01-00000-0',
    },
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
          <Text style={styles.bookPrice}>R$ {book.price.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre o livro</Text>
        <Text style={styles.description}>{book.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detalhes</Text>
        <View style={styles.detailsGrid}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Editora</Text>
            <Text style={styles.detailValue}>{book.details.publisher}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Ano</Text>
            <Text style={styles.detailValue}>{book.details.year}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Páginas</Text>
            <Text style={styles.detailValue}>{book.details.pages}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Idioma</Text>
            <Text style={styles.detailValue}>{book.details.language}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>ISBN</Text>
            <Text style={styles.detailValue}>{book.details.isbn}</Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => {
            // TODO: Implement add to cart functionality
            router.push('/market/cart');
          }}
        >
          <ShoppingBag size={24} color="#FFFFFF" />
          <Text style={styles.addToCartButtonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
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
    backgroundColor: '#FFFFFF',
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
    width: 200,
    height: 300,
    borderRadius: 12,
    marginBottom: 24,
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
    marginBottom: 16,
  },
  bookPrice: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#8B4513',
  },
  section: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  sectionTitle: {
    fontFamily: 'PlayfairDisplay-Regular',
    fontSize: 20,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  detailItem: {
    width: '45%',
  },
  detailLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  detailValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1A1A1A',
  },
  actions: {
    padding: 24,
    paddingBottom: 48,
  },
  addToCartButton: {
    backgroundColor: '#8B4513',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  addToCartButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});