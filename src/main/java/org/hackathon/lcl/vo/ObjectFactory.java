package org.hackathon.lcl.vo;

import java.util.ArrayList;
import java.util.List;

public class ObjectFactory
{
	
	public static PoTrack newPoTrack(int poTrackId, int cntnrTrackId, int eventId,
	          int senderId, String poNumber){
		PoTrack nPoTk= new PoTrack();
		nPoTk.poTrackId= poTrackId;
		nPoTk.containerTrackId= cntnrTrackId;
		nPoTk.eventId= eventId;
	    nPoTk.senderPartyId= senderId;
	    nPoTk.poNumber= poNumber;
		
		return nPoTk;
	}

  }
