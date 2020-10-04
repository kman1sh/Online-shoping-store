package com.manish.ecommerce.service;

import com.manish.ecommerce.domain.CreateUserModel;
import com.manish.ecommerce.domain.UserEntity;
import com.manish.ecommerce.domain.UserResponseModel;
import com.manish.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserEntity> user = userRepository.findById(username);
        return user.orElseThrow(() -> new UsernameNotFoundException(username));

    }

    public UserEntity getUserDetailsByEmail(String username) {
        Optional<UserEntity> user = userRepository.findById(username);
        return user.orElseThrow(() -> new UsernameNotFoundException(username));
    }

    public UserResponseModel createUser(CreateUserModel userDetails) {

        UserEntity userEntity = new UserEntity();
        userEntity.setName(userDetails.getName());
        userEntity.setUsername(userDetails.getEmail());
        userEntity.setPassword(bCryptPasswordEncoder.encode(userDetails.getPassword()));
        userEntity.setAdmin(false);

        userRepository.save(userEntity);

        UserResponseModel returnValue = new UserResponseModel();
        returnValue.setName(userEntity.getName());
        returnValue.setEmail(userEntity.getUsername());
        returnValue.setAdmin(userEntity.isAdmin());

        return  returnValue;
    }
}
