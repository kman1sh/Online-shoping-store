package com.manish.ecommerce.controllers;

import com.manish.ecommerce.ProductRepository;
import com.manish.ecommerce.domain.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class controller {

    private final ProductRepository repo;

    @Autowired
    public controller(ProductRepository repo) {
        this.repo = repo;
    }

    @GetMapping(value = "/products")
    public List<Product> getProducts() {
        return repo.findAll();
    }

    @PostMapping(value = "/products")
    public String getProducts(@RequestBody Product product) {
        Optional<Product> product1 = repo.findById(product.getId());
        if(product1.isPresent())
            return "Product with id: " +product.getId() + " already exists";

        repo.save(product);
        return "Saved Successfully";
    }

    @GetMapping(value = "/product/{id}")
    public Product getProduct(@PathVariable("id") Integer id) {
        Optional<Product> product = repo.findById(id);
        if(product.isEmpty())
            return null;
        return product.get();
    }


}
