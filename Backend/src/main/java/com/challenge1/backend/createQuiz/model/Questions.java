package com.challenge1.backend.createQuiz.model;
/**
 * <h1>Questions class</h1>
 * <p>The Questions class contains all the details of a particular question. It also contains the getter,setter and
 * toString methods .</p> 
 */
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

//@Document(collection="CreateQuestions")
@Component
public class Questions {
	
	
	@Id
	private long quesId;
	
	private String question;
	private String quesType;
	
	private String quesImage;
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	
	private String option1Image;
	private String option2Image;
	private String option3Image;
	private String option4Image;
	
	private Integer correct;
	private boolean correct1;
	private boolean correct2;
	private boolean correct3;
	private boolean correct4;
	private String textAnswer;
	
	public Questions() {
		
	}
	
	public Questions(String question, String quesType, String option1, String option2, String option3, String option4,
			Integer correct, boolean correct1, boolean correct2, boolean correct3, boolean correct4,
			String textAnswer) {
		super();
		this.question = question;
		this.quesType = quesType;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.correct = correct;
		this.correct1 = correct1;
		this.correct2 = correct2;
		this.correct3 = correct3;
		this.correct4 = correct4;
		this.textAnswer = textAnswer;
	}
	
	//with quesImage

//	public Questions(long quesId, String question, String quesType, String quesImage, String option1, String option2,
//			String option3, String option4, Integer correct, boolean correct1, boolean correct2, boolean correct3,
//			boolean correct4, String textAnswer) {
//		super();
//		this.quesId = quesId;
//		this.question = question;
//		this.quesType = quesType;
//		this.quesImage = quesImage;
//		this.option1 = option1;
//		this.option2 = option2;
//		this.option3 = option3;
//		this.option4 = option4;
//		this.correct = correct;
//		this.correct1 = correct1;
//		this.correct2 = correct2;
//		this.correct3 = correct3;
//		this.correct4 = correct4;
//		this.textAnswer = textAnswer;
//	}

	
	public long getQuesId() {
		return quesId;
	}

	public Questions(long quesId, String question, String quesType, String quesImage, String option1, String option2,
			String option3, String option4, String option1Image, String option2Image, String option3Image,
			String option4Image, Integer correct, boolean correct1, boolean correct2, boolean correct3,
			boolean correct4, String textAnswer) {
		super();
		this.quesId = quesId;
		this.question = question;
		this.quesType = quesType;
		this.quesImage = quesImage;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.option1Image = option1Image;
		this.option2Image = option2Image;
		this.option3Image = option3Image;
		this.option4Image = option4Image;
		this.correct = correct;
		this.correct1 = correct1;
		this.correct2 = correct2;
		this.correct3 = correct3;
		this.correct4 = correct4;
		this.textAnswer = textAnswer;
	}

	public String getOption1Image() {
		return option1Image;
	}

	public void setOption1Image(String option1Image) {
		this.option1Image = option1Image;
	}

	public String getOption2Image() {
		return option2Image;
	}

	public void setOption2Image(String option2Image) {
		this.option2Image = option2Image;
	}

	public String getOption3Image() {
		return option3Image;
	}

	public void setOption3Image(String option3Image) {
		this.option3Image = option3Image;
	}

	public String getOption4Image() {
		return option4Image;
	}

	public void setOption4Image(String option4Image) {
		this.option4Image = option4Image;
	}

	public void setQuesId(long id) {
		this.quesId = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getQuesType() {
		return quesType;
	}

	public void setQuesType(String quesType) {
		this.quesType = quesType;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public Integer getCorrect() {
		return correct;
	}

	public void setCorrect(Integer correct) {
		this.correct = correct;
	}

	public boolean isCorrect1() {
		return correct1;
	}

	public void setCorrect1(boolean correct1) {
		this.correct1 = correct1;
	}

	public boolean isCorrect2() {
		return correct2;
	}

	public void setCorrect2(boolean correct2) {
		this.correct2 = correct2;
	}

	public boolean isCorrect3() {
		return correct3;
	}

	public void setCorrect3(boolean correct3) {
		this.correct3 = correct3;
	}

	public boolean isCorrect4() {
		return correct4;
	}

	public void setCorrect4(boolean correct4) {
		this.correct4 = correct4;
	}

	public String getTextAnswer() {
		return textAnswer;
	}

	public void setTextAnswer(String textAnswer) {
		this.textAnswer = textAnswer;
	}
	
	

	public String getQuesImage() {
		return quesImage;
	}

	public void setQuesImage(String quesImage) {
		this.quesImage = quesImage;
	}

	@Override
	public String toString() {
		return "Questions [id=" + quesId + ", question=" + question + ", quesType=" + quesType + ", option1=" + option1
				+ ", option2=" + option2 + ", option3=" + option3 + ", option4=" + option4 + ", correct=" + correct
				+ ", correct1=" + correct1 + ", correct2=" + correct2 + ", correct3=" + correct3 + ", correct4="
				+ correct4 + ", textAnswer=" + textAnswer + "]";
	}
	
	
}
