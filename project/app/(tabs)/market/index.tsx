import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { router } from 'expo-router';
import { Search, ShoppingBag, BookOpen } from 'lucide-react-native';

export default function MarketScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const books = [
    {
      id: '1',
      title: 'O Mito de Sísifo',
      author: 'Albert Camus',
      price: 49.90,
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop',
      description: 'Um ensaio filosófico sobre o absurdo da existência humana.',
    },
    {
      id: '2',
      title: 'Fundação',
      author: 'Isaac Asimov',
      price: 59.90,
      cover: 'https://images.unsplash.com/photo-1531072901881-d644216d4bf9?w=400&auto=format&fit=crop',
      description: 'O primeiro livro da icônica série de ficção científica.',
    },
    {
      id: '3',
      title: 'Cem Anos de Solidão',
      author: 'Gabriel García Márquez',
      price: 64.90,
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop',
      description: 'A história épica da família Buendía.',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Market</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => router.push('/market/cart')}>
          <ShoppingBag size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color="#666666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar livros..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.booksList}>
        {books.map(book => (
          <TouchableOpacity
            key={book.id}
            style={styles.bookCard}
            onPress={() => router.push(`/market/${book.id}`)}
          >
            <Image source={{ uri: book.cover }} style={styles.bookCover} />
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookAuthor}>{book.author}</Text>
              <Text style={styles.bookDescription} numberOfLines={2}>
                {book.description}
              </Text>
              <View style={styles.bookFooter}>
                <Text style={styles.bookPrice}>R$ {book.price.toFixed(2)}</Text>
                <TouchableOpacity 
                  style={styles.addButton}
                  onPress={() => router.push(`/market/${book.id}`)}
                >
                  <BookOpen size={20} color="#FFFFFF" />
                  <Text style={styles.addButtonText}>Ver detalhes</Text>
                </TouchableOpacity>
              </View>
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
  cartButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1A1A1A',
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
    width: 120,
    height: 180,
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
    marginBottom: 8,
  },
  bookDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  bookFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookPrice: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#8B4513',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B4513',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  addButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});