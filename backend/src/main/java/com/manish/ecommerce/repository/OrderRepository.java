package com.manish.ecommerce.repository;

import com.manish.ecommerce.domain.OrderModal;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OrderRepository extends MongoRepository<OrderModal, String> {
    List<OrderModal> findAllByUsername(String username);

    OrderModal findByOrderId(String orderId);
}
