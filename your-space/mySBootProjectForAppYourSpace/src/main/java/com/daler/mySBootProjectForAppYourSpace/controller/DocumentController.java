package com.daler.mySBootProjectForAppYourSpace.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daler.mySBootProjectForAppYourSpace.exception.ResourceNotFoundException;
import com.daler.mySBootProjectForAppYourSpace.model.Document;
import com.daler.mySBootProjectForAppYourSpace.repository.DocumentRepository;

@RestController
// this is responsible for URL end point
@RequestMapping("/documents_api/v1")

public class DocumentController {
	@Autowired
	private DocumentRepository documentRepository;
	
	
	// Get all documents
	
	@GetMapping("/documents")
	public List<Document> getAllDocuments(Model model){
		return documentRepository.findAll();
	}
	
	// Get documents by id
	@GetMapping("/documents/{id}")
	public ResponseEntity<Document> getDocumentById(@PathVariable(value = "id") Long documentId)
	throws ResourceNotFoundException {
		Document document = documentRepository.findById(documentId)
				.orElseThrow(() -> new ResourceNotFoundException("Document Not Found with this ID :: " + documentId));
		return ResponseEntity.ok().body(document);
	}
	
	
	// Save document
	@PostMapping("/documents")
	public Document createDocument(@Valid @RequestBody Document document) {
		return documentRepository.save(document);
	}
	
	
	// Update Document
	@PutMapping("/documents/{id}")
	public ResponseEntity<Document> updateDocument(@PathVariable(value = "id") Long documentId, @Valid @RequestBody Document documentDetails)
	throws ResourceNotFoundException {
		Document document = documentRepository.findById(documentId)
				.orElseThrow(() -> new ResourceNotFoundException("Document Not Found for this ID :: " + documentId));
		
		document.setTitle(documentDetails.getTitle());
		document.setSubTitle(documentDetails.getSubTitle());
		document.setURL(documentDetails.getURL());
		document.setCreatedBy(documentDetails.getCreatedBy());
		document.setDescription(documentDetails.getDescription());
		
		
		final Document updateDocument = documentRepository.save(document);
		return ResponseEntity.ok(updateDocument);
		
	}
	
	
	// Delete Document
	@DeleteMapping("/document/{id}")
	public Map<String, Boolean> deletedDocument(@PathVariable(value = "id") Long documentId)
	throws ResourceNotFoundException {
		Document document = documentRepository.findById(documentId)
				.orElseThrow(() -> new ResourceNotFoundException("Document Not Found for this ID :: " + documentId));
		
		documentRepository.delete(document);
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("Deleted Document Sucessfully", Boolean.TRUE);
		return response;
	}

}

