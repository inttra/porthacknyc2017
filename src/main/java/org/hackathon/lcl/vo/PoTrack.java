package org.hackathon.lcl.vo;

public class PoTrack
{
	protected int poTrackId;
	protected int containerTrackId;
	protected int senderPartyId;
	protected int eventId;
	protected String poNumber;

	public int getPoTrackId(){
		return this.poTrackId;
	}
	public void setPoTrackId(int poTrackId){
		this.poTrackId= poTrackId;
	}

	public int getContainerTrackId(){
		return this.containerTrackId;
	}
	public void setContainerTrackId(int containerTrackId){
		this.containerTrackId= containerTrackId;
	}
	
	public int getSenderPartyId(){
		return this.senderPartyId;
	}
	public void setSenderPartyId(int senderPartyId){
		this.senderPartyId= senderPartyId;
	}

	public int getSenterPartyId(){
		return this.senderPartyId;
	}
	public void setSenterPartyId(int senderPartyId){
		this.senderPartyId= senderPartyId;
	}

	public int getEventId(){
		return this.eventId;
	}
	public void setEventId(int eventId){
		this.eventId= eventId;
	}

	public String getPoNumber(){
        return this.poNumber;
    }
    public void setPoNumber(String poNbr) {
        this.poNumber = poNbr;
    }
}