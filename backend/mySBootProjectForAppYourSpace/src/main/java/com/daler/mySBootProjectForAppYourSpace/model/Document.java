package com.daler.mySBootProjectForAppYourSpace.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "documents")

public class Document {
	
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(name = "doc_id", updatable = false, nullable = false)
private long id;


@Column(name = "title")
private String title;

@Column(name = "sub_title")
private String subTitle;

@Column(name = "url")
private String URL;

@Column(name = "created_by")
private String createdBy;


@Column(name = "create_date", nullable = false)
@CreationTimestamp
private LocalDateTime createDate;

@Column(name = "update_date", nullable = false)
@UpdateTimestamp
private LocalDateTime updateDate;

@Column(name = "description", length = 5000)
private String description;


public Document() {
	super();
}

public Document(String title, String subTitle, String URL, String createdBy, String description) {
	super();
	this.title = title;
	this.subTitle = subTitle;
	this.URL = URL;
	this.createdBy = createdBy;
	this.description = description;
}

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public String getTitle() {
	return title;
}

public void setTitle(String title) {
	this.title = title;
}

public String getSubTitle() {
	return subTitle;
}

public void setSubTitle(String subTitle) {
	this.subTitle = subTitle;
}

public String getURL() {
	return URL;
}

public void setURL(String URL) {
	this.URL = URL;
}

public String getCreatedBy() {
	return createdBy;
}

public void setCreatedBy(String createdBy) {
	this.createdBy = createdBy;
}

public LocalDateTime getCreateDate() {
	return createDate;
}

public void setCreateDate(LocalDateTime createDate) {
	this.createDate = createDate;
}

public LocalDateTime getUpdateDate() {
	return updateDate;
}

public void setUpdateDate(LocalDateTime updateDate) {
	this.updateDate = updateDate;
}

public String getDescription() {
	return description;
}

public void setDescription(String description) {
	this.description = description;
}


}
