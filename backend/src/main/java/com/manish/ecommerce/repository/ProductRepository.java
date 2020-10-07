package com.manish.ecommerce.repository;

import com.manish.ecommerce.domain.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
}
